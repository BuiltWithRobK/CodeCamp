const email = "user@domain.org";

function maskEmail (email){
    const index = email.indexOf("@")-1;
    const slice = email.slice(1,index);
    const astrisk = "*".repeat(index-1);
    const replace = email.replace(slice, astrisk);
    return replace;
}

console.log(maskEmail(email));