import "../css/app.css";
import "./bootstrap";
import 'react-quill/dist/quill.snow.css';

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import store from "./redux-toolkit/Store";

const appName = import.meta.env.VITE_APP_NAME || "Bipay Payroll Management";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    // module pages path match
    resolve: (name) => {
        const pages = import.meta.glob([
            "./Pages/**/*.tsx",
            "../../Modules/*/resources/js/Pages/**/*.tsx",
        ]);
        const regex = /([^:]+)::(.+)/;
        const matches = regex.exec(name);

        if (matches && matches.length > 2) {
            const module = matches[1].replace(
                /[A-Z]/g,
                (m) => m);

            const pageName = matches[2];

            return pages[
                `../../Modules/${module}/resources/js/Pages/${pageName}.tsx`
            ]();
        } else {
            return pages[`./Pages/${name}.tsx`]();
        }
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
                <Provider store={store}>
                    <App {...props} />
                </Provider>
                <Toaster richColors />
            </>
        );
    },
   
    progress: {
        color: "#4B5563",
    },
});
