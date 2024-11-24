import { Component } from '@angular/core';
import {questions} from './questions';
import {Router} from '@angular/router';

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

  ngOnInit(): void {}

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
