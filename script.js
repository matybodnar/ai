document.addEventListener('DOMContentLoaded', () => {

    const hello = document.querySelector('#hello');

    const applyChange = (id, callback) => {
        document.querySelector(id).addEventListener('change', function () {
            callback(this.value);
        });
    };

    // Color
    applyChange('#color', value => {
        hello.style.color = value;
    });

    // Size
    applyChange('#size', value => {
        hello.style.fontSize = value + 'px';
    });

    // Font
    applyChange('#font', value => {
        hello.style.fontFamily = value;
    });

    // Background
    applyChange('#background', value => {
        document.body.style.background = value;
    });

    // Border
    applyChange('#border', value => {
        hello.style.border = value;
    });

    // Shadow
    applyChange('#shadow', value => {
        hello.style.textShadow = value;
    });

});
