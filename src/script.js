
// UPDATE PREVIEW
const updatePreview = () => {
    $("#preview").html(marked($("#editor").val()));
};



// FUNCTION SETS VERTICAL LAYOUT
const setVerticalLayout = () => {
    $("#windows").removeClass("windows-horizontal")
        .addClass("windows-vertical");

    $("#btn-v").addClass("btn-active");
    $("#btn-h").removeClass("btn-active");
}



// FUNCTION SETS HORIZONTAL LAYOUT
const setHorizontalLayout = () => {
    $("#windows").removeClass("windows-vertical")
        .addClass("windows-horizontal");

    $("#btn-h").addClass("btn-active");
    $("#btn-v").removeClass("btn-active");
}



$(document).ready(() => {
    // ADD UPDATE ACTION
    $("#editor").on("input", updatePreview);

    // START WITH VERTICAL LAYOUT
    setVerticalLayout();

    // ADD BUTTONS ACTIONS
    $("#btn-h").click(setHorizontalLayout);
    $("#btn-v").click(setVerticalLayout);
});
