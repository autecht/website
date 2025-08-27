function ImageCredit(name, url, license, licenseUrl) {
  return (
    <p class="name no-spacing">Credit: <a href={url}>{name}</a>, <a href={licenseUrl}>{license}</a> </p>
  );
}
export default function Heading({ heading, image=null, alt = "", href = "", creditName="", creditUrl="", creditLicense="", creditLicenseUrl="", h1=false }) {
  const headingText = href? <a href={href}>{heading}</a>:heading;
  const headingElement = h1 ? <h1 class="heading">{headingText}</h1> : <h2 class="heading">{headingText}</h2>
  const credit = creditName?ImageCredit(creditName, creditUrl, creditLicense, creditLicenseUrl):<></>;
  const imageElement = image?<img class="about-image" alt={alt} src={image}></img>:<></>;
  
  return <div class="rounded-box heading-box">
    {imageElement}
    {credit}
    {headingElement}
  </div>;
}