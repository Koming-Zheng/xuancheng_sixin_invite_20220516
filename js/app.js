document.body.addEventListener('DOMContentLoaded', () => {


});



document.querySelector('#submit').addEventListener('click',() => {
	let name = document.querySelector('#name');
	let phonenumber = document.querySelector('#phonenumber');
	let email = document.querySelector("#email");
	let company = document.querySelector('#company');
	let company_profile = document.querySelector('#company_profile');
	let industry = document.querySelector('#industry');
	let remark = document.querySelector('#remark')

	if(validateValue(name.value) == false){
		alert('姓名不能空着');
		return
	}

	if(validateValue(phonenumber.value) == false) {
		alert('手机号不能空着');
		return
	}

	if (validatePhone(phonenumber.value) == false) {
		alert('手机号格式不正确')
		return
	}

	if (validateEmail(email.value) == false && validateValue(email.value) == true) {
		alert('邮箱格式不正确')
		return
	}

	if(validateValue(company.value) == false) {
		alert('公司名称不能空着');
		return
	}

	if(validateValue(company_profile.value) == false) {
		alert('公司简介（主营产品）不能空着');
		return
	}



	if(industry.value == '选填以下信息'){
		alert('所属行业不能空着')
		return
	}

	alert('填写信息检查完毕')


});



function validateValue(strValue) {
	if (strValue.trim() != "") {
	return true 
	} else {

	return false 
	}


}


function validatePhone(strValue) {
	let reg_phonenumber = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
	if (reg_phonenumber.test(strValue)) {
		return true
	} else {
		return false
	}
}


function validateEmail(strValue) {
	let reg_email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*.\w+([-.]\w+)*$/;
	if (reg_email.test(strValue)) {
		return true
	} else {
		return false;
	}

}