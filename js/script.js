const form = document.getElementById("qr-form");
const qr = document.getElementById("qrcode");

const handleSubmit = (e) => {
	e.preventDefault();

	clearUI();
	const url = document.getElementById("url").value;

	if (url === "") {
		alert("Please enter a URL");
	} else {
		showSpinner();

		setTimeout(() => {
			hideSpinner();
			generateQRCode(url);

			setTimeout(() => {
				const saveUrl = qr.querySelector("img").src;

				createSaveBtn(saveUrl);
			}, 50);
		}, 1000);
	}
};

const generateQRCode = (url) => {
	const qrcode = new QRCode("qrcode", {
		text: url,
		width: 300,
		height: 300,
	});
};

const clearUI = () => {
	qr.innerHTML = "";
	const saveBtn = document.getElementById("save-link");
	if (saveBtn) {
		saveBtn.remove();
	}
};

const showSpinner = () => {
	const spinner = document.getElementById("spinner");
	spinner.style.display = "block";
};

const hideSpinner = () => {
	const spinner = document.getElementById("spinner");
	spinner.style.display = "none";
};

hideSpinner();

const createSaveBtn = (saveUrl) => {
	const link = document.createElement("a");
	link.id = "save-link";
	link.classList = "saveBtn";
	link.href = saveUrl;
	link.download = "qrcode";
	link.innerHTML = "Save Image";
	document.getElementById("generated").appendChild(link);
};

form.addEventListener("submit", handleSubmit);
