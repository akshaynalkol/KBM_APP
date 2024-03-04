import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import Quiz from './Component/Quiz';
import Timer from './Component/Timer';
import Start from './Component/Start';

function App() {
	const [userName, setUserName] = useState(null);
	const [questionNo, setQuestionNo] = useState(1);
	const [stop, setStop] = useState(false);
	const [earned, setEarned] = useState("$ 0");

	const data = [
		{
			id: 1,
			question: 'Which Indian cricketer is also known as the “God of Cricket”?',
			answere: [
				{
					text: 'MS Dhoni',
					correct: false
				},
				{
					text: 'Yuvraj Singh',
					correct: false
				},
				{
					text: 'Virat Kohli',
					correct: false
				},
				{
					text: 'Sachin Tendulkar',
					correct: true
				}
			]
		},
		{
			id: 2,
			question: 'Who was the first Indian batsman to hit a century in a Test match?',
			answere: [
				{
					text: 'Lala Amarnath Bharadwaj',
					correct: true
				},
				{
					text: 'Kapil Dev',
					correct: false
				},
				{
					text: 'Sunil Gavaskar',
					correct: false
				},
				{
					text: 'Vijay Hazare ',
					correct: false
				}
			]
		},
		{
			id: 3,
			question: 'How many times has India won the Asia Cup?',
			answere: [
				{
					text: '5',
					correct: false
				},
				{
					text: '6',
					correct: false
				},
				{
					text: '7',
					correct: true
				},
				{
					text: '8',
					correct: false
				}
			]
		},
		{
			id: 4,
			question: 'Which Indian cricketer has captained the Indian team in the most World Cup matches?',
			answere: [
				{
					text: 'Sourav Ganguly',
					correct: false
				},
				{
					text: 'MS Dhoni',
					correct: true
				},
				{
					text: 'Virat Kohli',
					correct: false
				},
				{
					text: 'Rohit Sharma',
					correct: false
				}
			]
		},
		{
			id: 5,
			question: 'Which Indian cricketer has scored the most centuries in World Cup history??',
			answere: [
				{
					text: 'Sachin Tendulkar',
					correct: false
				},
				{
					text: 'Virat Kohli',
					correct: false
				},
				{
					text: 'Rohit Sharma',
					correct: true
				},
				{
					text: 'MS Dhoni',
					correct: false
				}
			]
		},
		{
			id: 6,
			question: 'Which type of JavaScript language is __________',
			answere: [
				{
					text: 'Object-Oriented',
					correct: true
				},
				{
					text: 'Object-Based',
					correct: false
				},
				{
					text: 'Assembly-Language',
					correct: false
				},
				{
					text: 'High-Level',
					correct: false
				}
			]
		},
		{
			id: 7,
			question: 'The "Function" and "var" are known as:',
			answere: [
				{
					text: 'Keywords',
					correct: false
				},
				{
					text: 'Data Types',
					correct: false
				},
				{
					text: 'Declaration Statements',
					correct: true
				},
				{
					text: 'Prototypes',
					correct: false
				}
			]
		},
		{
			id: 8,
			question: 'Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL":',
			answere: [
				{
					text: 'if(a!==null)',
					correct: true
				},
				{
					text: 'if (a!)',
					correct: false
				},
				{
					text: 'if(a!null)',
					correct: false
				},
				{
					text: 'if(a!=null)',
					correct: false
				}
			]
		},
		{
			id: 9,
			question: 'Which one of the following is an ternary operator?',
			answere: [
				{
					text: '?',
					correct: true
				},
				{
					text: ':',
					correct: false
				},
				{
					text: '-',
					correct: false
				},
				{
					text: '+',
					correct: false
				}
			]
		},
		{
			id: 10,
			question: 'What we will get if we compare the "one" with "8" using the less than operator ("one"<8)?',
			answere: [
				{
					text: 'False',
					correct: true
				},
				{
					text: 'True',
					correct: false
				},
				{
					text: 'NaN',
					correct: false
				},
				{
					text: 'Undefined',
					correct: false
				}
			]
		},
		{
			id: 11,
			question: 'Which Indian and Australian cricketers have been named the Man of the Match in a World Cup final?',
			answere: [
				{
					text: ' Sachin Tendulkar and Ricky Ponting',
					correct: true
				},
				{
					text: 'Virat Kohli and Michael Clarke',
					correct: false
				},
				{
					text: 'Rohit Sharma and Glenn Maxwell',
					correct: false
				},
				{
					text: 'Virat Kohli and Gautam Gambir',
					correct: false
				}
			]
		},
		{
			id: 12,
			question: 'Approximately how many forts are there in Maharashtra?',
			answere: [
				{
					text: '150',
					correct: false
				},
				{
					text: '200',
					correct: false
				},
				{
					text: '270',
					correct: false
				},
				{
					text: '350',
					correct: true
				}
			]
		},
		{
			id: 13,
			question: 'World Wide Web is being standard by',
			answere: [
				{
					text: 'Worldwide Corporation',
					correct: false
				},
				{
					text: 'W3C',
					correct: true
				},
				{
					text: 'World Wide Consortium',
					correct: false
				},
				{
					text: 'World Wide Web Standard',
					correct: false
				}
			]
		},
		{
			id: 14,
			question: 'Name of religious personality who exercised a great influence over Chatrapati Shivaji Maharaj',
			answere: [
				{
					text: 'Tukaram',
					correct: false
				},
				{
					text: 'Kavi Kalash',
					correct: false
				},
				{
					text: 'Mirabai',
					correct: false
				},
				{
					text: 'Guru Ram Das',
					correct: true
				}
			]
		},
		{
			id: 15,
			question: 'Who was known as Iron man of India?',
			answere: [
				{
					text: 'Gonind Ballabh pant',
					correct: false
				},
				{
					text: 'Jawaharlal Nehru',
					correct: false
				},
				{
					text: 'Subhash Chandra Bose',
					correct: false
				},
				{
					text: 'Sardar Vallabhbhai Patel',
					correct: true
				}
			]
		}
	]

	const money = useMemo(() =>
		[
			{ id: 1, amount: '$ 100' },
			{ id: 2, amount: '$ 200' },
			{ id: 3, amount: '$ 300' },
			{ id: 4, amount: '$ 500' },
			{ id: 5, amount: '$ 1000' },
			{ id: 6, amount: '$ 2000' },
			{ id: 7, amount: '$ 4000' },
			{ id: 8, amount: '$ 8000' },
			{ id: 9, amount: '$ 16000' },
			{ id: 10, amount: '$ 32000' },
			{ id: 11, amount: '$ 64000' },
			{ id: 12, amount: '$ 125000' },
			{ id: 13, amount: '$ 250000' },
			{ id: 14, amount: '$ 500000' },
			{ id: 15, amount: '$ 1000000' },
		].reverse(), []);

	useEffect(() => {
		questionNo > 1 && setEarned(money.find(m => m.id === questionNo - 1).amount);
	}, [money, questionNo]);

	return (
		<>
			<div className="container-fluid text-white bg-color">
				{
					userName ?
						(
							<div className="row">
								<div className="col-md-9">
									<div className='box1'>
										{stop ? <h1 className='text-center'>You Earned : {earned}</h1> : (
											<>
												<div className='top h-50'>
													<button className='btn text-white bg-warning showHide'
														data-bs-toggle='offcanvas' data-bs-target='#show'>
														Show
													</button>
													<h2 className='fw-bold'>
														<Timer setStop={setStop} questionNo={questionNo} />
													</h2>
												</div>
												<div className='bottom h-50'>
													<Quiz data={data} setStop={setStop} questionNo={questionNo}
														setQuestionNo={setQuestionNo} />
												</div>
											</>
										)}
									</div>
								</div>
								<div className="col-3 align-self-center d-md-inline-block d-none">
									<div className='d-lg-flex justify-content-between align-items-center my-2'>
										<h6 className='mb-1'>Name : {userName}</h6>
										<h6 className='mb-0'>Total Earned : {earned}</h6>
									</div>
									<div className='box2 border-top border-secondary pt-2'>
										<ul className='list-unstyled'>
											{
												money.map((val, index) => {
													return (
														<li key={index} className={`p-1 ps-2 rounded w-100 d-flex align-items-center ${questionNo === val.id ? 'active' : ''}`}>
															<span className='fs-5 w-25'>{val.id}</span>
															<span className='fs-5'>{val.amount}</span>
														</li>
													)
												})
											}
										</ul>
									</div>
								</div>
								<div className="offcanvas offcanvas-md offcanvas-end bg-color text-white" id='show'>
									<div className='offcanvas-header px-0'>
										<h5 className='offcanvas-title'>Data</h5>
										<button className='btn-close btn-close-white' data-bs-dismiss='offcanvas'></button>
									</div>
									<div className='d-lg-flex justify-content-between align-items-center my-2'>
										<h6 className='mb-1'>Name : {userName}</h6>
										<h6 className='mb-0'>Total Earned : {earned}</h6>
									</div>
									<div className='box2 border-top border-secondary pt-2'>
										<ul className='list-unstyled'>
											{
												money.map((val, index) => {
													return (
														<li key={index} className={`p-1 ps-2 rounded w-100 d-flex align-items-center ${questionNo === val.id ? 'active' : ''}`}>
															<span className='fs-5 w-25'>{val.id}</span>
															<span className='fs-5'>{val.amount}</span>
														</li>
													)
												})
											}
										</ul>
									</div>
								</div>
							</div>
						) :
						(<Start setUserName={setUserName} />)
				}
			</div>
		</>
	);
}

export default App;
