<div class="android-more-section">
  <div class="android-section-title mdl-typography--display-1-color-contrast">ALL NEWS</div>
  <div class="android-card-container mdl-grid">
    <div *ngFor="let news of allNews | paginate: { itemsPerPage: 8, currentPage: page }; let i = index;" class="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
      <div class="mdl-card__media">
        <img src="{{news.urlToImage}}">
      </div>
      <div class="mdl-card__title">
          <h4 class="mdl-card__title-text">{{ news.title }}</h4>
      </div>
        <div class = "inline">
        <p>{{ news.publishedAt | date:'short' }}</p>
        <p>Author: <strong>{{news.author}}</strong></p>
        </div>
      <div class="mdl-card__supporting-text">
        <span class="mdl-typography--font-light mdl-typography--subhead">{{ news.description }}</span>
      </div>
      <div class="mdl-card__actions">
          <a class="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="{{news.url}}" target="_blank">
            Read More
            <i class="material-icons">chevron_right</i>
          </a>
      </div>
    </div>
     <pagination-controls (pageChange)="page = $event" style="cursor: pointer;"></pagination-controls>
     </div>
</div>