HTML5 TEMPLATE:
1:<!-- -->
The comment tag is used to insert comments in the source code.
Comments are not displayed in the browsers.
2:<!DOCTYPE html>
All HTML documents must start with a <!DOCTYPE> declaration.
The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.
3:<meta>
The <meta> tag defines metadata about an HTML document. 
Metadata is data (information) about data.
<meta> tags always go inside the <head> element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.
Metadata will not be displayed on the page, but is machine parsable.
Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.
4:<script>
The <script> tag is used to embed a client-side script (JavaScript).
The <script> element either contains scripting statements, or it points to an external script file through the src attribute.
Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.
5:<tr>
The <tr> tag defines a row in an HTML table.
A <tr> element contains one or more <th> or <td> elements.
6:<th>
The <th> tag defines a header cell in an HTML table.
An HTML table has two kinds of cells:
Header cells - contains header information (created with the <th> element)
Data cells - contains data (created with the <td> element)
The text in <th> elements are bold and centered by default.
------------------------------------------
DIFFERENT WAYS TO APPLY CSS:
1:INLINE
Inline styles are plonked straight into the HTML tags using the style attribute.
<p style="color: red">text</p>
2:INTERNAL
Embedded, or internal, styles are used for the whole page. Inside the head element, the style tags surround all of the styles for the page.
<!DOCTYPE html>
<html>
<head>
<title>CSS Example</title>
<style>

    p {
        color: red;
    }

    a {
        color: blue;
    }

</style>
...
3:EXTERNAL
External styles are used for the whole, multiple-page website. 
There is a separate CSS file, which will simply look something like:
p {
    color: red;
}

a {
    color: blue;
}
<!DOCTYPE html>
<html>
<head>
    <title>CSS Example</title>
    <link rel="stylesheet" href="style.css">
------------------------------------------
CSS BOX DIAGRAM:
In CSS, the term "box model" is used when talking about design and layout.
The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

Content - The content of the box, where text and images appear
Padding - Clears an area around the content. The padding is transparent
Border - A border that goes around the padding and content
Margin - Clears an area outside the border. The margin is transparent
The box model allows us to add a border around elements, and to define space between elements. 