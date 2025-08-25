
function ImageCredit(name, url, license, licenseUrl) {
  return (
    <p class="name no-spacing">Credit: <a href={url}>{name}</a>, <a href={licenseUrl}>{license}</a> </p>
  );
}

export function ToggleButton({ onClick, text }) {
  return (
    <button class="rounded-box heading-box name" onClick={onClick}>{text}</button>
  );
}

export function Heading({ heading, h1 = false, href = "" }) {
  const headingText = href? <a href={href}>{heading}</a>:heading;
  return <div class="rounded-box heading-box">
    {h1 ? <h1 class="heading">{headingText}</h1> : <h2 class="heading">{headingText}</h2>}
  </div>;
}
export function HeadingWithImage({ heading, image, alt = "", h1 = false, href = "" }) {
  const headingText = href? <a href={href}>{heading}</a>:heading;
  return <div class="rounded-box heading-box">

    <img class="about-image" alt={alt} src={image}></img>
    {h1 ? <h1 class="heading">{headingText}</h1> : <h2 class="heading">{headingText}</h2>}

  </div>;
}


export function HeadingWithImageAndCredit({ heading, image, alt = "", href = "", creditName, creditUrl, creditLicense, creditLicenseUrl }) {
  const headingText = href? <a href={href}>{heading}</a>:heading;
  return <div class="rounded-box heading-box">
    <img class="about-image" alt={alt} src={image}></img>
    {ImageCredit(creditName, creditUrl, creditLicense, creditLicenseUrl)}
    <h2 class="heading">{headingText}</h2>
  </div>;
}
export function BodyBox({ children }) {
  return <div class="rounded-box body-box">
    <p class="body">
      {children}
    </p>
  </div>;
}

export function Section({ children, reverse=false }) {
  return <div class={reverse?"section reverse":"section"}>
    {children}

    <div style= {{flex: 0.25}}></div>
  </div>;
}



