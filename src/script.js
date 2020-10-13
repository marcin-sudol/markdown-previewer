
// UPDATE PREVIEW
const updatePreview = () => {
    $("#preview").html(marked($("#editor").val()));
};



// LAYOUT FUNCTIONS
const setLayoutHorizontal = () => {
    $("#windows").removeClass("windows-vertical")
        .addClass("windows-horizontal");
}

const setLayoutVertical = () => {
    $("#windows").removeClass("windows-horizontal")
        .addClass("windows-vertical");
}





$(document).ready(() => {
    // ADD UPDATE ACTION
    $("#editor").on("input", updatePreview);

    // ADD BUTTONS ACTIONS
    $("#btn-h").click(setLayoutHorizontal);
    $("#btn-v").click(setLayoutVertical);
});
