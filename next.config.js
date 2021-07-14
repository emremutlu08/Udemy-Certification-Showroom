const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        udemy_clientid: "SkcsQx04WPbSJpC0pDa6sHLCrObamrUmbzSQBn3A",
        udemy_secret:
          "AiOCaqjNlFNXcHtlCU20T3ReVSvE07apMs94Gq9KKlUPzRENNRqc8pFOKpgUyhZnFmUXritfukJmIcpWfp8rWxGJZebBv3AuhuLtUmgtOddHhMOScwKjAvSvikUGgFk3",
        udemy_authorization:
          "Basic U2tjc1F4MDRXUGJTSnBDMHBEYTZzSExDck9iYW1yVW1ielNRQm4zQTpBaU9DYXFqTmxGTlhjSHRsQ1UyMFQzUmVWU3ZFMDdhcE1zOTRHcTlLS2xVUHpSRU5OUnFjOHBGT0twZ1V5aFpuRm1VWHJpdGZ1a0ptSWNwV2ZwOHJXeEdKWmViQnYzQXVodUx0VW1ndE9kZEhoTU9TY3dLakF2U3Zpa1VHZ0ZrMw==",
        mongodb_username: "emre123",
        mongodb_password: "Goldbear66!",
        mongodb_clustername: "cluster0",
        mongodb_database: "udemyShowroom",
      },
    };
  }
  return {
    env: {
      udemy_clientid: "SkcsQx04WPbSJpC0pDa6sHLCrObamrUmbzSQBn3A",
      udemy_secret:
        "AiOCaqjNlFNXcHtlCU20T3ReVSvE07apMs94Gq9KKlUPzRENNRqc8pFOKpgUyhZnFmUXritfukJmIcpWfp8rWxGJZebBv3AuhuLtUmgtOddHhMOScwKjAvSvikUGgFk3",
      udemy_authorization:
        "Basic U2tjc1F4MDRXUGJTSnBDMHBEYTZzSExDck9iYW1yVW1ielNRQm4zQTpBaU9DYXFqTmxGTlhjSHRsQ1UyMFQzUmVWU3ZFMDdhcE1zOTRHcTlLS2xVUHpSRU5OUnFjOHBGT0twZ1V5aFpuRm1VWHJpdGZ1a0ptSWNwV2ZwOHJXeEdKWmViQnYzQXVodUx0VW1ndE9kZEhoTU9TY3dLakF2U3Zpa1VHZ0ZrMw==",
      mongodb_username: "emre123",
      mongodb_password: "Goldbear66!",
      mongodb_clustername: "cluster0",
      mongodb_database: "udemyShowroom",
    },
  };
};
