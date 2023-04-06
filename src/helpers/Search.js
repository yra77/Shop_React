

export function SearchString(arr, str) {
    str = str.toLowerCase();
    return arr.filter(item => item.brand.includes(str) || item.name.includes(str));
}