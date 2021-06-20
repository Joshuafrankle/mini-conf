import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/style.css";
import App from "./App";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

const { REACT_APP_SENTRY_KEY } = process.env;

Sentry.init({
  dsn: REACT_APP_SENTRY_KEY,

  beforeSend(event, hint) {
    if (event.exception) {
      Sentry.showReportDialog({ eventId: event.event_id });
    }
    return event;
  },

  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
