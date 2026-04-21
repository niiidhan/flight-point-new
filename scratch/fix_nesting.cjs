const fs = require('fs');
const path = "c:\\Users\\nidhan\\Downloads\\flight-point-new\\src\\components\\About.jsx";
let content = fs.readFileSync(path, 'utf8');

// Find Screen 2 section
const screen2Start = content.indexOf('{/* Screen 2: Editorial/Story */}');
const screen3Start = content.indexOf('{/* Screen 3: Airline Partner Grid */}');

if (screen2Start !== -1 && screen3Start !== -1) {
    const screen2EndSection = content.lastIndexOf('</section>', screen3Start);
    if (screen2EndSection !== -1) {
        // Insert </div> before </section>
        const newContent = content.slice(0, screen2EndSection) + '  </div>\n        ' + content.slice(screen2EndSection);
        fs.writeFileSync(path, newContent);
        console.log("Fixed Screen 2 nesting.");
    } else {
        console.log("Could not find </section> for Screen 2.");
    }
} else {
    console.log("Could not find Screen markers.");
}
