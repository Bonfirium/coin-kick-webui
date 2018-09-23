import { toast } from 'react-toastify';

class ToastActionsClass {

	/**
	 * Toast about successful event
	 * @param {string} text
	 */
	toastSuccess(text) {
		toast.success(text, {
			autoClose: 3000,
		});
	}

	/**
	 * Toast with information message
	 * @param {string} text
	 */
	toastInfo(text) {
		toast.info(text, {
			autoClose: 3000,
		});
	}

	/**
	 * Toast about unsuccessful event
	 * @param {string|object} error
	 */
	toastError(error) {
		if (typeof error === 'string') {
			toast.error(error, {
				autoClose: 3000,
			});
		} else if (typeof error === 'object') {
			Object.keys(error).forEach((index) => {
				error[index].forEach((message) => {
					if (typeof message === 'string') {
						toast.error(`${index}: ${message}`, {
							autoClose: 3000,
						});
					} else if (typeof message === 'object') {
						const messageWords = message.message.split(' ');
						const resultMessage = messageWords.map((word) => {
							if (word.startsWith('$')) {
								if	(word in message) {
									return message[word];
								}
							}
							return word;
						});
						resultMessage.unshift(index);
						toast.error(resultMessage.join(' '), {
							autoClose: 3000,
						});
					}
				});
			});
		}
	}

}

const ToastActions = new ToastActionsClass();
export default ToastActions;
