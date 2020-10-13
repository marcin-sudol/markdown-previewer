
// UPDATE PREVIEW
const updatePreview = () => {
    $("#preview").html(marked($("#editor").val()));
};

$(document).ready(() => {
    $("#editor").on('input', updatePreview);
});
