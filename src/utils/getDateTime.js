export default function getDateTime(value, type, inMs) {
    if (!type) return value;
    if (!value) return null;
    if (!inMs) {
        value = value * 1000;
    }
    let options;
    const date = new Date(value);
    if (type === 'time') {
        options = { hour: 'numeric', minute: 'numeric' };
    } else if (type === 'date') {
        options = {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        };
    }
    return new Intl.DateTimeFormat('en-US', options).format(date);
}
