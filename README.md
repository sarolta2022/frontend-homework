# Secret Sauce Size Calculator

Calculate your size with ease!

## Background

Apparel and footwear sizing is quite inconsistent and there can be great
differences between brands. Size charts can help navigate the landscape when
shopping online.

Understanding size charts can be a challenge. The Secret Sauce Size Calculator
was born to address this. The calculator helps users by suggesting their best
fitting sizes based on their body measurements.

Sizing varies across brands and categories. The calculator is meant to be a
standalone tool which means users must pick a brand and a category for which
they want to see a size recommendation.

There can be multiple sizes that match their body measurements. Different
products use different size labels. It can happen that within the same
brand and category some products use numeric labels (2, 4, 6, 8, 10) and
some use alpha labels (XS, S, M, L, XL).

### Size charts

An example size chart looks like the following:

![DVF size chart](images/dvf-dresses.png)

The above size chart describes sizes for Diane von Furstenberg dresses.
There are multiple body measurements but a single dominant measurement can
be used to calculate your best fitting size. This measurement is different for
different categories. For example bust/chest can be used for dresses and tops
while hip/waist works for bottoms such as pants or jeans.

## Task

Create an application that allows users to calculate their sizes.

The application should look exactly like the following:

Main screen: ![main screen](images/screenshot.jpg)

Suggested size screen: ![finish screen](images/screenshot2.jpg)

Additionally you can find the same design on
[Figma](https://www.figma.com/file/0mvO5viOpngFpdnCKs569l/homework-design).

You can find the necessary assets in the `assets/` directory.

Your task is to implement an application that allows the user to complete the
form and get size recommendations. The necessary inputs are the following:

1. Brand. The calculator supports hundreds of brands so `/brands` endpoint is
   paginated or can be filtered using the `name_prefix` parameter.
2. Category. There are only a handful of categories for any brand.
3. Body measurement. This is a single value that describes the dominant
   measurement for the selected category.

After completing the form the user must be presented with the suggested size
labels. The API can return multiple results.

### Size Calculator API

A service for size suggestions is available at
https://size-calculator-api.sspinc.io. The API provides all the necessary
endpoints such as listing brands and categories and calculating size
suggestions. The Swagger specification for the API is available on the
aforementioned address. You will need your username and API key to access it.

The API uses [HTTP Basic authentication][basic-auth].

### Example request using fetch()

```js
var username = "<your username>";
var apiKey = "<your api key>";
var promise = fetch('https://size-calculator-api.sspinc.io/brands', {
    mode: 'cors',
    credentials: 'include',
    method: 'GET',
    headers: {
        'Authorization': 'Basic ' + btoa(`${username}:${apiKey}`)
    }
})

promise
    .then((response) => response.json())
    .then((data) => console.log(data))
```

### Technology

For the programming language JavaScript and TypeScript are our preferred
choices. There is no preferred framework use whatever is the most comfortable
for you.

## Submitting your work

1. Fork this repository
2. Commit your changes to your local repository
3. Push changes to your fork
4. *DO NOT* open a pull request
5. Reply to our email with a link to your GitHub repository

[basic-auth]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication
