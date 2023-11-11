$(function(){
   /*for color switcher starts */
     var colorSheets = [
    {
        color: "#ff8400",
        title: "Switch to Default",
        href: "./css/style.css"
    },
    {
        color: "skyblue",
        title: "Switch to Skyblue",
        href: "./css/skyblue.css"
    },
    {
        color: "#DAA520",
        title: "Switch to GoldenRod",
        href: "./css/goldenrod.css"
    },
    {
        color: "#0B6623",
        title: "Switch to ForestGreen",
        href: "./css/forestgreen.css"
    },
];
ColorSwitcher.init(colorSheets);
});