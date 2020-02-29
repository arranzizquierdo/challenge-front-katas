export function kata2 (obj, def, path) {
    let result;

    path ?
        result = getResultWithPath(obj, def, path) :
        result = function(path2) { return kata2(obj, def, path2)};

    return result;
};

function getResultWithPath (obj, def, path) {
    const pathObject = path.split('.');
    let result;

    pathObject.forEach(level => {
        obj && obj.hasOwnProperty(level) ?
            obj = obj[level] :
            obj = undefined;
    });

    !obj ? result = def : result = obj;

    return result;
};