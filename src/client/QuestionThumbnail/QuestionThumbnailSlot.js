import React from 'react';
import './QuestionThumbnailSlot.css';

/*
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
*/

class QuestionThumbnailSlot extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let varIndex = this.props.index;
		let varQuestion = this.props.question;
		/*
		let varIndex = 0;
		let varQuestion = testPropsQuestion;
		*/

		let someJSX = (
			<div className="questionThumbnailSlot" >
				<div className="questionThumbnailSlotText" >
					<span className="questionThumbnailSlotIndexAndAns nonImage">#{varIndex + 1} - {varQuestion.selectedAnswers}</span>
					<span className="questionThumbnailSlotQuestion nonImage">{varQuestion.pregunta}</span>
					<span className="questionThumbnailSlotTime nonImage">{varQuestion.tiempo} seg</span>
				</div>
				<div className="questionThumbnailSlotImage" >
					<img className="questionThumbnailSlotImageSmol" src={"https://img.youtube.com/vi/" + varQuestion.selectedVideo.videoID + "/1.jpg"} alt="" />
				</div>
			</div>
		);
		return someJSX;
	}

} export default QuestionThumbnailSlot;