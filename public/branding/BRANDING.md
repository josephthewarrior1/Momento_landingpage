# Momento official logo

The user supplied `momento-logo-reference.png` on 4 October 2026 as the official Momento logo. The blue loop-shaped M and lowercase wordmark replace the previous placeholder brand marks. Personal couple monograms remain part of invitation designs.

Assets:

- `momento-logo-blue.png`: transparent horizontal logo, 2162 × 727 pixels. The visible artwork has a roughly 5.4:1 aspect ratio; CSS clips the transparent vertical margin with `aspect-ratio: 5.4 / 1` and `object-fit: cover`.
- `momento-mark-blue.png`: transparent emblem, 1254 × 1254 pixels. Use for seals, compact navigation and browser icons.
- `momento-logo-reference.png`: original supplied logo board for provenance.

The application and separate landing repository each include their own copy under `public/branding/`. The reusable UI components render the same assets. A CSS white filter provides contrast on dark backgrounds.

## Asset preparation

Prepared with the built-in imagegen tool in background-extraction edit mode using the original logo board as the edit target. No CLI/API fallback was used.

Horizontal logo prompt:

> Use case: background-extraction. Input image is the edit target: the user's official Momento logo board. Extract ONLY the large blue horizontal Momento logo in the TOP half of the board: loop-shaped rounded M emblem on the left and the exact lowercase word 'momento' on the right. Preserve its precise existing shapes, lettering, kerning, relative proportions and vivid original blue. This is asset cleanup, not a redesign. Remove the white background completely and omit both small examples in the bottom half. Output a single crisp, flat, faithful logo on a genuinely transparent alpha background, tightly framed with very little transparent padding, horizontal natural logo aspect ratio. No new text, captions, added border, shadow, texture, gradients or artistic changes. Text verbatim: 'momento'.

Emblem prompt:

> Use case: background-extraction. Input image is the edit target: the user's official Momento logo board. Extract ONLY the small blue loop-shaped rounded M emblem in the LOWER LEFT part of the board. Preserve its exact existing silhouette, stroke thickness, joins and original vivid blue; it is the same emblem as the top horizontal logo. Remove the white background and all words/other examples. Output one centered sharp icon on a genuinely transparent alpha background, square canvas, filling 85% of width with modest padding. Faithful asset cleanup, not logo redesign. No letters or wordmark, no added border, shadow, gradient or texture.
