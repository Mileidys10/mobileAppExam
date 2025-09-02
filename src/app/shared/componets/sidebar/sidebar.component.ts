import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Iuser, UserService } from '../../service/user-service';
import { Subscription } from 'rxjs';


export interface SideItem {
  id: string;
  label: string;
  icon?: string;
}




@Component({
  selector: 'app-sidebar',  
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
    standalone: false

})
export class SidebarComponent implements OnInit, OnDestroy {
  userName = 'Usuario';
  userStatus = 'Online';
  private sub?: Subscription;
  currentUser: Iuser | null = null;

  items: SideItem[] = [
    { id: 'business', label: 'Business', icon: 'briefcase-outline' },
    { id: 'entertainment', label: 'Entertainment', icon: 'film-outline' },
    { id: 'general', label: 'General', icon: 'earth-outline' },
    { id: 'health', label: 'Health', icon: 'medkit-outline' },
    { id: 'science', label: 'Science', icon: 'flask-outline' },
    { id: 'sports', label: 'Sports', icon: 'football-outline' },
    { id: 'technology', label: 'Technology', icon: 'hardware-chip-outline' }
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
        this.currentUser = this.userService.getUser();

    // nos suscribimos al BehaviorSubject para recibir updates en tiempo real
    this.sub = this.userService.getCurrentUserObservable().subscribe((u: Iuser | null) => {
      if (u) {
        this.userName = `${u.name ?? ''} ${u.lastName ?? ''}`.trim() || u.email || 'Usuario';
        // si tienes un campo status puedes asignarlo aquí
        this.userStatus = 'Online';
      } else {
        this.userName = 'Usuario';
        this.userStatus = 'Offline';
      }
    });
  }

onLogout() {
    this.userService.logout();
    this.currentUser = null;
    // si quieres redirigir:
    // this.router.navigate(['/login']);
  }



  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
