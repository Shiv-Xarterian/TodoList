("use strict");

exports.config = {
  app_name: ["JSTODOLIST"],
  license_key: "ad1021b4318515c022794f1552de24fdFFFFNRAL",
  agent_enabled: true,
  logging: {
    enabled: true,
    level: "trace",
  },
  error_collector: {
    enabled: true,
  },
  application_logging: {
    enabled: true, // Enable application logging
    metrics: {
      enabled: true, // Enable metrics related to application logging
    },
    forwarding: {
      enabled: true, // Enable log forwarding to New Relic
      max_samples_stored: 10000, // Maximum number of log samples stored locally before sending
    },
    local_decorating: {
      enabled: true, // Enable log decoration with context metadata (adds trace IDs, etc.)
    },
  },
};
