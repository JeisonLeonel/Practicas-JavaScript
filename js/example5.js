function getInitials(fullName) {
    const words = fullName.split(' ');
    let initials = '';

    for (let i = 0; i < words.length; i++) {
        initials += words[i].charAt(0).toUpperCase();
    };
    return initials;
}
console.log(getInitials('Juan Pablo Montoya'));