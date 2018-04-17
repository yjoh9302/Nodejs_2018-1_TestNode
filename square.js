module.exports = function (width) {
    //객체 중괄호 리턴  ,배열은 대괄호
    return {
        area: function () {
            return width*width;
        }
    };
}