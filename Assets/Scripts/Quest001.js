import UnityEngine.UI;

var TextBoxOnCheck : int = 0;
var MessageBox : GameObject;
var TextBox : GameObject;
var TextMessage : String;
var QuestBox : GameObject;
var QuestText : GameObject;
var QuestName : String;

function OnMouseDown()
{
	if(TextBoxOnCheck == 0)
	{
		TextBoxOnCheck = 1;
		MessageBox.SetActive(true);
		TextBox.GetComponent.<Text>().text = TextMessage;
		QuestName = "Active Quest: 'Recover The Loot.'";
		QuestText.GetComponent.<Text>().text = QuestName;
	}
	else
	{
		TextBoxOnCheck = 0;
		MessageBox.SetActive(false);
		TextMessage = "Villager: Go on then, Get going!!";
	}
}