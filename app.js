////this is the generic type / mean is one type related to other types.
// const arr: Array<string> = [];
function countAndDescribe(element) {
    var descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 elements.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
countAndDescribe('hi there!');
