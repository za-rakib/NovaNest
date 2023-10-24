/* tailwind-rn customization by creating style.json file */
/* npx create-tailwind-rn #/ 
/* run every time after modification of tailwind.config.js file to generate updated style.json file */

import { create } from "tailwind-rn";
import styles from "../../styles.json";

const { tailwind, getColor } = create(styles);
export { tailwind, getColor };
