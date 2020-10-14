const initialText = "# Header\n## Subheader\n---\n\nText formatting examples:  \n**bold text**  \nInline code: `int x = 10;`\n\nBlock code: \n```\nconst add = (x, y) => (x + y);\n```\n\nBlockquote:\n> Logic will get you from A to Z; imagination will get you verywhere\n\nUnordered list:\n- item a\n- item b\n- item c\n\nOrdered list:\n1. item 1\n1. item 2\n1. item 3\n\nLink: [my codepen]\n\nPicture:  \n![logo]\n\n[my codepen]: https://codepen.io/marsud\n[logo]: https://brand.jquery.org/resources/jquery-mark-light.gif";



// UPDATE PREVIEW
const updatePreview = () => {
    //let previewHtml = $("#editor").val().split('\n').map(line => marked(line)).join('<br>');
    let previewHtml = marked($("#editor").val());
    $("#preview").html(previewHtml);
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

    // SET INITIAL TEXT
    $("#editor").val(initialText);

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
