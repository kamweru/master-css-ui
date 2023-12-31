import { cv } from "../utils";
export const iconDAttributes = {
  cursor:
    "M5.5 3.483c0-1.248 1.436-1.95 2.421-1.184l13.514 10.513c1.128.877.508 2.684-.92 2.684h-6.853c-.505 0-.981.23-1.294.626l-4.191 5.3c-.882 1.116-2.677.492-2.677-.93V3.483Zm15.014 10.513L7 3.483v17.009l4.191-5.3a3.15 3.15 0 0 1 2.47-1.196h6.853Z",
  "dots-vertical":
    "M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z",
  "info-outline":
    "M11 17h2v-6h-2v6Zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8q0 .425.288.713T12 9Zm0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z",
  close:
    "M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z",
  "success-circle-outline":
    "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z",
  "alert-warning-outline":
    "M12 5.99L19.53 19H4.47L12 5.99M2.74 18c-.77 1.33.19 3 1.73 3h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18zM11 11v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zm0 5h2v2h-2z",
  "error-outline":
    "M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8Z",
  "chevron-left": "m14 20l-8-8l8-8l1.414 1.414L8.828 12l6.586 6.586z",
  "chevron-right": "m10 20l8-8l-8-8l-1.414 1.414L15.172 12l-6.586 6.586z",
  "chevron-up": "m4 15l8-8l8 8l-1.414 1.414L12 9.828l-6.586 6.586z",
  "chevron-down": "m20 9l-8 8l-8-8l1.414-1.414L12 14.172l6.586-6.586z",
};

export const shadow = cv("", {
  intent: {
    bottom:
      "box-shadow:rgba(0,0,0,0.03)|0|1|2|0,rgba(0,0,0,0.02)|0|1|6|-1,rgba(0,0,0,0.02)|0|2|4|0",
    rect: "box-shadow:rgba(0,0,0,0.027)|0|0|1.7,rgba(0,0,0,0.043)|0|0|5.6,rgba(0,0,0,0.07)|0|0|25",
    other:
      "box-shadow:0|1|2|0|rgba(0,0,0,0.03),0|1|6|-1|rgba(0,0,0,0.02),0|2|4|0|rgba(0,0,0,0.02)",
    dropdown: "box-shadow:0|17|54|rgba(21,23,37,.2)",
  },
  default: {
    intent: "rect",
  },
});
export const border = cv("", {
  intent: {
    primary: "b:1|solid|gray-86 b:indigo-88:hover b:indigo-84:focus",
    divider: "bt:1|solid|gray-86",
    plain: "b:1|solid|gray-86",
  },
  default: {
    intent: "primary",
  },
});

// padding: 0.2857142857rem -5 0.8571428571rem - 14;
// margin - right: 0.4285714286rem - 7;
// bright - #7e8190 gray-56 - for icons and text
// dark - #1c1e2d  gray-14 - for active text like on a button
// header text - #333543 gray-28
// box-shadow:0|17|54|rgba(21,23,37,.2); - for dropdown
// #f6f6f8 - bg offwhite
// bg- darkmode - #232326 gray-20
// bg - darkmode- superdark #0b0b0b  - #232326 gray-20 - bright for topnave and sidenav #a4a7b5 - icons color: hsla(0,0%,100%,.65) hsla(0,0%,100%,.85);
