
// UPDATE PREVIEW
const updatePreview = () => {
    $("#preview").html(marked($("#editor").val()));
};



// FUNCTION SETS VERTICAL LAYOUT
const setVerticalLayout = () => {
    $("#windows").removeClass("layout-horizontal")
        .addClass("layout-vertical");

    $("#btn-v").addClass("btn-active");
    $("#btn-h").removeClass("btn-active");
}



// FUNCTION SETS HORIZONTAL LAYOUT
const setHorizontalLayout = () => {
    $("#windows").removeClass("layout-vertical")
        .addClass("layout-horizontal");

    $("#btn-h").addClass("btn-active");
    $("#btn-v").removeClass("btn-active");
}



$(document).ready(() => {
    // UPDATE PREVIEW
    updatePreview();

    // ADD UPDATE ACTION
    $("#editor").on("input", updatePreview);

    // START WITH VERTICAL LAYOUT
    setVerticalLayout();

    // ADD BUTTONS ACTIONS
    $("#btn-h").click(setHorizontalLayout);
    $("#btn-v").click(setVerticalLayout);
});
