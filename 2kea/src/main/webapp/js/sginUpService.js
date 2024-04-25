/**
 * 
 */


const signService = {
	signIn(successCall, errorCall) {
		fetch('signInControl.do', {
			method: 'post',
			headers: { 'Content-type': 'application/x-www-form-urlencoded' },
			body: 'id=' + vo.id + '&pw=' + vo.pw
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall)
	},
	signUp(successCall, errorCall) {
		fetch('signUpControl.do', {
			method: 'post',
			headers: { 'Content-type': 'application/x-www-form-urlencoded' },
			body: 'id=' + vo.id + '&pw=' + vo.pw + '&mName=' + vo.mName + '&email='
				+ vo.email + '&phone' + vo.phone
		})
			.then(e => e.json())
			.then()
			.then(successCall)
			.catch(errorCall)
	},
	findId(successCall, errorCall) {
		fetch('findIdControl.do', {
			method: 'post',
			headers: { 'Content-type': 'application/x-www-form-urlencoded' },
			body: 'mName=' + vo.mName + '&phone=' + vo.phone
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall)
	},
	findPw(successCall, errorCall) {
		fetch('findPwControl.do', {
			method: 'post',
			headers: { 'Content-type': 'application/x-www-form-urlencoded' },
			body: 'id=' + vo.id + '&mName=' + vo.mName + '&phone=' + vo.phone
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall)
	}

}