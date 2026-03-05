import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contacto" class="contact">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ t().contact.label }}</span>
          <h2 class="section-title">{{ t().contact.title }}</h2>
          <p class="section-description">{{ t().contact.description }}</p>
        </div>

        <div class="contact-content">
          <div class="contact-info">
            <a href="mailto:juanjosemedicis@gmail.com" class="info-card">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p>juanjosemedicis&#64;gmail.com</p>
            </a>
            <a href="tel:+573213314641" class="info-card">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.98 5.98l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>{{ t().contact.phone }}</h3>
              <p>+57 321 331 4641</p>
            </a>
            <a href="https://maps.google.com/?q=Popay%C3%A1n,+Cauca,+Colombia" target="_blank" rel="noopener noreferrer" class="info-card">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>{{ t().contact.location }}</h3>
              <p>Popayán, Colombia</p>
            </a>

            <div class="social-section">
              <h3>{{ t().contact.followMe }}</h3>
              <div class="social-links">
                <a href="https://github.com/Juan-MZ" target="_blank" rel="noopener noreferrer" class="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/juanjosemedicis/" target="_blank" rel="noopener noreferrer" class="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form class="contact-form" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="name">{{ t().contact.name }}</label>
              <input
                type="text"
                id="name"
                name="name"
                [(ngModel)]="formData.name"
                [placeholder]="t().contact.namePlaceholder"
                required>
            </div>
            <div class="form-group">
              <label for="email">{{ t().contact.email }}</label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="formData.email"
                placeholder="tu@email.com"
                required>
            </div>
            <div class="form-group">
              <label for="subject">{{ t().contact.subject }}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                [(ngModel)]="formData.subject"
                [placeholder]="t().contact.subjectPlaceholder"
                required>
            </div>
            <div class="form-group">
              <label for="message">{{ t().contact.message }}</label>
              <textarea
                id="message"
                name="message"
                [(ngModel)]="formData.message"
                rows="5"
                [placeholder]="t().contact.messagePlaceholder"
                required></textarea>
            </div>
            <button type="submit" class="submit-btn" [disabled]="sending">
              <span *ngIf="!sending">{{ t().contact.sendButton }}</span>
              <span *ngIf="sending">{{ t().contact.sending }}</span>
              <svg *ngIf="!sending" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="10" x2="15" y2="10"></line>
                <polyline points="10 5 15 10 10 15"></polyline>
              </svg>
            </button>

            <div *ngIf="success" class="form-feedback success">
              {{ t().contact.successMsg }}
            </div>
            <div *ngIf="error" class="form-feedback error">
              {{ t().contact.errorMsg }}
            </div>
          </form>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <p>{{ t().contact.footer }}</p>
      </div>
    </footer>
  `,
  styles: [`
    .contact {
      padding: 5rem 2rem;
      background: transparent;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-label {
      display: inline-block;
      padding: 0.5rem 1.5rem;
      background: var(--primary);
      color: white;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 1rem;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 1rem 0;
    }

    .section-description {
      font-size: 1.125rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 3rem;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .info-card {
      display: block;
      padding: 1.5rem;
      background: var(--bg-card);
      border-radius: 12px;
      text-align: center;
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
      text-decoration: none;
      cursor: pointer;
    }

    .info-card:hover {
      border-color: var(--primary);
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(96, 165, 250, 0.2);
    }

    .info-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 0.75rem;
      width: 52px;
      height: 52px;
      border-radius: 14px;
      background: rgba(96, 165, 250, 0.12);
      color: var(--primary, #60a5fa);
    }

    .info-icon svg {
      width: 26px;
      height: 26px;
    }

    .info-card h3 {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0 0 0.5rem 0;
    }

    .info-card p {
      font-size: 0.9375rem;
      color: var(--text-secondary);
      margin: 0;
    }

    .info-card:hover .info-icon {
      background: rgba(96, 165, 250, 0.22);
    }

    .social-section {
      padding: 1.5rem;
      background: var(--primary);
      border-radius: 12px;
      color: white;
    }

    .social-section h3 {
      font-size: 1.125rem;
      margin: 0 0 1rem 0;
      text-align: center;
    }

    .social-links {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .social-link:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateX(5px);
    }

    .contact-form {
      background: var(--bg-card);
      padding: 2rem;
      border-radius: 16px;
      border: 1px solid var(--border-color);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
      font-size: 0.9375rem;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.875rem 1rem;
      border: 2px solid var(--border-color);
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
      font-family: inherit;
      box-sizing: border-box;
      background: var(--bg-darker);
      color: var(--text-primary);
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .submit-btn {
      width: 100%;
      padding: 1rem 2rem;
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .submit-btn:hover {
      transform: translateY(-2px);
      background: var(--primary-dark);
      box-shadow: 0 10px 20px rgba(96, 165, 250, 0.4);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    .form-feedback {
      margin-top: 1rem;
      padding: 0.875rem 1rem;
      border-radius: 8px;
      font-size: 0.95rem;
      font-weight: 500;
    }

    .form-feedback.success {
      background: rgba(34, 197, 94, 0.1);
      border: 1px solid rgba(34, 197, 94, 0.4);
      color: #4ade80;
    }

    .form-feedback.error {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.4);
      color: #f87171;
    }

    .footer {
      padding: 2rem;
      background: var(--bg-darker);
      color: var(--text-secondary);
      text-align: center;
      border-top: 1px solid var(--border-color);
    }

    .footer p {
      margin: 0;
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      .contact {
        padding: 4rem 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .contact-content {
        grid-template-columns: 1fr;
      }

      .contact-form {
        padding: 1.5rem;
      }
    }
  `]
})
export class ContactComponent {
  private http = inject(HttpClient);
  private langService = inject(LangService);
  readonly t = this.langService.t;

  // Reemplaza este valor con tu access key de https://web3forms.com
  private readonly ACCESS_KEY = '6281111e-aa31-442a-be59-b870a0186398';

  sending = false;
  success = false;
  error = false;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    this.sending = true;
    this.success = false;
    this.error = false;

    const payload = {
      access_key: this.ACCESS_KEY,
      name: this.formData.name,
      email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message,
      from_name: 'Portfolio - ' + this.formData.name
    };

    this.http.post('https://api.web3forms.com/submit', payload).subscribe({
      next: () => {
        this.success = true;
        this.sending = false;
        this.formData = { name: '', email: '', subject: '', message: '' };
      },
      error: () => {
        this.error = true;
        this.sending = false;
      }
    });
  }
}
