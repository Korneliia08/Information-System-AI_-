import { Component } from '@angular/core';
import {questions} from './questions';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-chat-page',
  standalone: false,

  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss'
})
export class ChatPageComponent {
  public pageSize = 5;
  public questionHistory: {
    question: string;
  }[] = questions;
  public currentPage = 0;
  selectedAiVersion: string = '4.5';

  isDarkTheme: boolean = true;
  userLocale = ['en', 'fr', 'es', 'pl', 'ro'].includes(navigator.language)
    ? navigator.language
    : 'en';
  userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  question: string = '';
  conversation: any[] = [];
  isLoading: boolean = false;
  errorMsg = '';
  conversations: any[] = [];
  dataSources: any[] = [];
  selectedDataSources: any[] = [];
  conversation_id = '';
  isUpdating = false;

  constructor(private router:Router) {}

  public calcEmptyRow() {
    const row =
      this.pageSize -
      this.questionHistory.slice(
        this.pageSize * this.currentPage,
        this.pageSize * (this.currentPage + 1),
      ).length;
    if (row < 0) return 0;
    return row;
  }



    gradients = [
      "linear-gradient(135deg, #212224, #2a2b2d)", // М'який перехід між темно-сірими відтінками
      "linear-gradient(135deg, #212224, #1b1d1f)", // Темніший градієнт із майже чорним відтінком
      "linear-gradient(135deg, #212224, #24313a)", // Ледь відчутний синьо-зелений відтінок
    ];

    currentGradient = this.gradients[0];
  private index = 0;

    ngOnInit() {
      this.startAnimation();
      setTimeout(() => {

        this.currentGradient = ''
      }, 6000); // Кожні 2 секунди

    }


    startAnimation(): void {
      let counter = 1
     let interval = setInterval(() => {
        this.index = (this.index + 1) % this.gradients.length; // Зміна індексу
        this.currentGradient = this.gradients[this.index];
        if(counter++>=3){
          clearInterval(interval)
          this.currentGradient = ''
        }
      }, 2000); // Кожні 2 секунди
    }





  sendMessage() {
    this.questionHistory.push({ question: this.question.trim() });
    if (this.question.trim() === '') {
      return;
    }

    this.isLoading = true;

    this.question = '';
  }

  exportConversation() {}

  loadConversation(conv_id: string) {
    this.conversation = [];

    if (conv_id.length === 0) {
      this.conversation_id = '';

      this.question = '';

      return;
    }

    this.isLoading = true;

    this.conversation_id = conv_id;

    this.question = '';
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  onSelectionChange(): void {
    const selectedDatasourceIds = this.dataSources

      .filter((ds) => ds.selected && ds._id)

      .map((ds) => ds._id)

      .filter((id): id is string => id !== undefined);
  }

  selectHistoryQuestion(question: { question: string }) {
    this.question = question.question;
  }

  rev(questionHistory: { question: string }[]) {
    return questionHistory.reverse();
  }

  back() {
    this.router.navigate(['/'])
  }
}
