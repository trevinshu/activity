let featureLink = document.querySelector("a.link");

const featureLinkHandler = function FunctionName(evt) {
  let featureImage = document.querySelector("img.feature");
  featureImage.src = featureLink.href;
  featureImage.classList.remove("hidden");
  evt.preventDefault();
};

featureLink.addEventListener("click", featureLinkHandler);
