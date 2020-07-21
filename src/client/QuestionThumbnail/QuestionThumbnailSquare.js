import React from 'react';
import './QuestionThumbnailSquare.css';


const testPropsQuestion = {
	"show": false,
	"selectedAnswers": "quiz",
	"tiempo": "12",
	"pregunta": "asda sdsad  sdsad sdsadsdsad vsdsad sdsad sdsadsdsad vsdsad sdsad sdsadsdsad vsdsads dfgdfgse4t",
	"posibleAnswers": {
		"correctAnswer": "quizC",
		"options": {
			"quizAText": "sdaaa",
			"quizBText": "sd",
			"quizCText": "aaaa",
			"quizDText": "sda"
		}
	},
	"selectedVideo": {
		videoID: "yy8aprH0ceE",
		videoPrettyLink: "https://www.youtube-nocookie.com/embed/yy8aprH0ceE?controls=2&loop=1&modestbranding=1&rel=0&showinfo=0&autoplay=1&start=5&end=8",
		videoStart: "",
		videoEnd: "",

	},
	"puntos": "21",
	"key": 1
}


class QuestionThumbnailSquare extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		/*
		let varIndex = this.props.index;
		let varQuestion = this.props.question;
		*/

		let varIndex = 0;
		let varQuestion = testPropsQuestion;


		let someJSX = (
			<div className='questionThumbnailSquare' >

					<div >
						<div className="questionThumbnailSquareImage" >
							<img className="questionThumbnailSquareImage" src={"https://img.youtube.com/vi/" + varQuestion.selectedVideo.videoID + "/0.jpg"} alt="" />
						</div>
						<div className="questionThumbnailSquareFoot" >
							<span className="questionThumbnailSquareText" >{varQuestion.tiempo}s</span>
							<span className="questionThumbnailSquareText" >{varQuestion.selectedAnswers}</span>
						</div>
					</div>
			</div>
		);

		return someJSX;
	}
} export default QuestionThumbnailSquare;