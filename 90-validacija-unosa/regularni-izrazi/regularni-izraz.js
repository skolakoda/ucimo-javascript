const tekst = 'U 2015 povodu 1945 obilježavanja i proslave 70 obljetnice značajnih događaja iz Narodnooslobodilačke borbe Hrvatske, Savez antifašističkih boraca i antifašista Republike Hrvatske priredio je u svojim prostorijama i na internetu izložbu fotografija iz perioda Narodno-oslobodilačkog rata.'
const obrazac = /[0-9]{4}/g

// samo nalazi
console.log(tekst.match(obrazac))
// nalazi i menja
console.log(tekst.replace(obrazac, 'xxxxx'))
