const Lotto = require('../src/Objects/Lotto');

describe('로또 당첨 번호 클래스 테스트', () => {
	test('로또 당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto('1,2,3,4,5,6,7');
		}).toThrow('[ERROR] 당첨 번호는 6개여야 합니다.');
	});

	// TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
	test('로또 당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto('1,2,3,4,5,5');
		}).toThrow('[ERROR] 당첨 번호는 서로 다른 숫자여야 합니다.');
	});

	// 아래에 추가 테스트 작성 가능
	test('로또 당첨 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto('test,test');
		}).toThrow('[ERROR] 번호는 숫자를 입력해야 합니다.');
	});

	test('로또 당첨 번호에 1부터 45에 속하지 않은 숫자가 있으면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto('1,2,3,4,5,54');
		}).toThrow('[ERROR] 당첨 번호는 1부터 45사이여야 합니다.');
	});

	test('로또 당첨 번호를 콤마로 구분하지 않으면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto('1248597');
		}).toThrow('[ERROR] 당첨 번호를 쉼표로 구분하여 입력하십시오.');
	});
});
