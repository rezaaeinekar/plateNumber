<div align="center">
	<h1 align="center">Iranian Platenumber</h1>
	<p align="center">A React package for displaying and entering information on license plates of Iranian cars.</p>
</div>
<hr />

[![npm version](https://img.shields.io/npm/v/iranian-platenumber.svg?style=flat-square)](https://www.npmjs.org/package/iranian-platenumber)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=iranian-platenumber&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=iranian-platenumber)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/iranian-platenumber?style=flat-square)](https://bundlephobia.com/package/iranian-platenumber@latest)
[![npm downloads](https://img.shields.io/npm/dm/iranian-platenumber.svg?style=flat-square)](https://npm-stat.com/charts.html?package=iranian-platenumber)
[![code helpers](https://www.codetriage.com/rezzaaeinekar/iranian-platenumber/badges/users.svg)](https://www.codetriage.com/iranian-platenumber/iranian-platenumber)
[![Known Vulnerabilities](https://snyk.io/test/npm/iranian-platenumber/badge.svg)](https://snyk.io/test/npm/iranian-platenumber)
[![jsDeliver](https://data.jsdelivr.com/v1/package/npm/iranian-platenumber/badge)](https://www.jsdelivr.com/package/npm/iranian-platenumber)

# Installing

## Package manager

### Using npm:

```bash
 npm install iranian-platenumber
```

### Using yarn:

```bash
 yarn add iranian-platenumber
```

### Options

| Param      | Type     | Default | Description                                                 | Example |
| ---------- | -------- | ------- | ----------------------------------------------------------- | ------- |
| twoDigit   | String   | ``      | The first two numbers on the left side of the platenumber   | `11`    |
| letter     | String   | ``      | The letter of the platenumber                               | `ب`     |
| threeDigit | String   | ``      | The first three numbers on the left side of the platenumber | `111`   |
| cityDigit  | String   | ``      | The last two numbers on the left side of the platenumber    | `11`    |
| readOnly   | Boolean  | `false` | For a time that is not allowed to change                    | `false` |
| size       | SizeType | `md`    | Overall size of the component                               | `md`    |
| colorize   | Boolean  | `true`  | Activation of color plate number                            | `true`  |

## SizeType

type size = "sm" | "md" | "lg" | "xl"

| key | component size | font size |
| --- | -------------- | --------- |
| sm  | 10px           | 150px     |
| md  | 13px           | 200px     |
| lg  | 17px           | 250px     |
| xl  | 22px           | 350px     |
=======
# plateNumber
>>>>>>> fb19ec95095c3a189f67e483169a9099e23faf03
