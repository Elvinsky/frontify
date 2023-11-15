import 'tailwindcss/tailwind.css';

import { defineBlock } from '@frontify/guideline-blocks-settings';

import { ContrastChecker } from './ContrastChecker';
import { settings } from './settings';

export default defineBlock({
    block: ContrastChecker,
    settings,
});
