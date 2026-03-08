// ================================================================
// UCC Portal — Shared JavaScript
// All pages include this file.
// ================================================================

// ── Mock Data ──────────────────────────────────────────────────
const MOCK = {
  users: [
    { user_id:1, student_id:'S2021-0001', full_name:'Juan Dela Cruz',   email:'juan.delacruz@ucc.edu.ph', password:'password', role:'student', course:'BSCS', year_level:3, contact_no:'09171234567', is_active:1, created_at:'2021-08-15' },
    { user_id:2, student_id:'S2022-0045', full_name:'Maria Santos',     email:'maria.santos@ucc.edu.ph',  password:'password', role:'student', course:'BSBA', year_level:2, contact_no:'09189876543', is_active:1, created_at:'2022-08-20' },
    { user_id:3, student_id:'S2020-0112', full_name:'Pedro Gonzales',   email:'pedro.gonzales@ucc.edu.ph',password:'password', role:'student', course:'BSIT', year_level:4, contact_no:'09161112233', is_active:1, created_at:'2020-08-10' },
    { user_id:4, student_id:'S2023-0321', full_name:'Rosa Lim',         email:'rosa.lim@ucc.edu.ph',      password:'password', role:'student', course:'BSED', year_level:1, contact_no:'09391234567', is_active:1, created_at:'2023-08-12' },
    { user_id:10,student_id:'STAFF-001',  full_name:'Anna Reyes',       email:'anna.reyes@ucc.edu.ph',    password:'password', role:'staff',   course:'', year_level:0, contact_no:'09175551234', is_active:1, created_at:'2020-01-10' },
    { user_id:11,student_id:'STAFF-002',  full_name:'Carlos Rivera',    email:'carlos.rivera@ucc.edu.ph', password:'password', role:'staff',   course:'', year_level:0, contact_no:'09185552345', is_active:1, created_at:'2019-06-15' },
    { user_id:20,student_id:'ADMIN-001',  full_name:'Dr. Sofia Martinez',email:'sofia.martinez@ucc.edu.ph',password:'password',role:'admin',   course:'', year_level:0, contact_no:'09175559999', is_active:1, created_at:'2018-03-01' },
  ],
  doc_types: [
    { doc_type_id:1, type_name:'Transcript of Records',    description:'Official academic transcript showing all courses taken and grades earned.',    processing_days:5,  fee:150, is_available:1 },
    { doc_type_id:2, type_name:'Certificate of Enrollment',description:'Certifies that the student is currently enrolled in the institution.',          processing_days:2,  fee:50,  is_available:1 },
    { doc_type_id:3, type_name:'Good Moral Certificate',   description:'Certifies the student\'s good moral character and conduct.',                    processing_days:3,  fee:75,  is_available:1 },
    { doc_type_id:4, type_name:'Certificate of Graduation',description:'Certifies that the student has completed the requirements for graduation.',      processing_days:7,  fee:100, is_available:1 },
    { doc_type_id:5, type_name:'Certificate of Grades',    description:'Shows grades for a specific semester or school year.',                           processing_days:3,  fee:75,  is_available:1 },
    { doc_type_id:6, type_name:'Honorable Dismissal',      description:'Required when transferring to another school.',                                  processing_days:5,  fee:100, is_available:1 },
    { doc_type_id:7, type_name:'Diploma Copy',             description:'Certified copy of the student\'s diploma.',                                      processing_days:10, fee:200, is_available:1 },
    { doc_type_id:8, type_name:'Authentication of Documents',description:'Authentication/verification of school documents.',                             processing_days:3,  fee:50,  is_available:0 },
  ],
  requests: [
    { request_id:1, reference_no:'REQ-2026-0001', student_id:1,  doc_type_id:1, quantity:1, purpose:'Job application at Accenture',  urgency:'normal', preferred_pickup:'2026-03-15', status:'completed', remarks:'', processed_by:10, date_submitted:'2026-03-01T09:00:00', date_completed:'2026-03-10T14:00:00' },
    { request_id:2, reference_no:'REQ-2026-0002', student_id:1,  doc_type_id:2, quantity:2, purpose:'Scholarship application',        urgency:'urgent', preferred_pickup:'2026-03-10', status:'processing',remarks:'', processed_by:10, date_submitted:'2026-03-05T10:30:00', date_completed:null },
    { request_id:3, reference_no:'REQ-2026-0003', student_id:1,  doc_type_id:3, quantity:1, purpose:'Employment requirement',         urgency:'normal', preferred_pickup:'2026-03-20', status:'pending',   remarks:'', processed_by:null,date_submitted:'2026-03-07T08:00:00', date_completed:null },
    { request_id:4, reference_no:'REQ-2026-0004', student_id:2,  doc_type_id:1, quantity:1, purpose:'Graduate school application',    urgency:'normal', preferred_pickup:'2026-03-18', status:'pending',   remarks:'', processed_by:null,date_submitted:'2026-03-06T11:00:00', date_completed:null },
    { request_id:5, reference_no:'REQ-2026-0005', student_id:4,  doc_type_id:2, quantity:1, purpose:'Government ID application',      urgency:'normal', preferred_pickup:'2026-03-12', status:'ready',     remarks:'', processed_by:11, date_submitted:'2026-03-04T14:00:00', date_completed:null },
    { request_id:6, reference_no:'REQ-2026-0006', student_id:3,  doc_type_id:3, quantity:1, purpose:'Job Application',                urgency:'normal', preferred_pickup:'2026-03-22', status:'pending',   remarks:'', processed_by:null,date_submitted:'2026-03-07T09:30:00', date_completed:null },
    { request_id:7, reference_no:'REQ-2026-0007', student_id:2,  doc_type_id:5, quantity:2, purpose:'Scholarship requirement',        urgency:'urgent', preferred_pickup:'2026-03-11', status:'processing',remarks:'', processed_by:10, date_submitted:'2026-03-06T14:00:00', date_completed:null },
    { request_id:8, reference_no:'REQ-2026-0008', student_id:1,  doc_type_id:4, quantity:1, purpose:'Abroad application',             urgency:'normal', preferred_pickup:'2026-03-25', status:'rejected',  remarks:'Incomplete requirements.', processed_by:10, date_submitted:'2026-02-20T10:00:00', date_completed:null },
  ],
  status_logs: [
    { log_id:1, request_id:1, changed_by:10, old_status:null,        new_status:'pending',    note:'Request submitted.',                  changed_at:'2026-03-01T09:00:00' },
    { log_id:2, request_id:1, changed_by:10, old_status:'pending',   new_status:'processing', note:'Started processing.',                 changed_at:'2026-03-02T10:00:00' },
    { log_id:3, request_id:1, changed_by:10, old_status:'processing',new_status:'ready',      note:'Document is ready for pickup.',        changed_at:'2026-03-08T15:00:00' },
    { log_id:4, request_id:1, changed_by:10, old_status:'ready',     new_status:'completed',  note:'Student picked up the document.',      changed_at:'2026-03-10T14:00:00' },
    { log_id:5, request_id:2, changed_by:1,  old_status:null,        new_status:'pending',    note:'Request submitted.',                  changed_at:'2026-03-05T10:30:00' },
    { log_id:6, request_id:2, changed_by:10, old_status:'pending',   new_status:'processing', note:'Urgent — prioritized.',               changed_at:'2026-03-05T14:00:00' },
    { log_id:7, request_id:5, changed_by:11, old_status:'pending',   new_status:'processing', note:'Processing enrollment certificate.',   changed_at:'2026-03-05T09:00:00' },
    { log_id:8, request_id:5, changed_by:11, old_status:'processing',new_status:'ready',      note:'Certificate ready for pickup.',        changed_at:'2026-03-06T11:00:00' },
    { log_id:9, request_id:8, changed_by:10, old_status:'pending',   new_status:'rejected',   note:'Incomplete requirements submitted.',   changed_at:'2026-02-22T09:00:00' },
  ],
  notifications: [
    { notif_id:1, user_id:1, request_id:1, message:"Your request REQ-2026-0001 (Transcript of Records) has been completed. Please pick it up at the Registrar's Office.", is_read:1, created_at:'2026-03-10T14:05:00' },
    { notif_id:2, user_id:1, request_id:2, message:'Your request REQ-2026-0002 (Certificate of Enrollment) is now being processed.',         is_read:0, created_at:'2026-03-05T14:05:00' },
    { notif_id:3, user_id:1, request_id:3, message:'Your request REQ-2026-0003 (Good Moral Certificate) has been received and is pending review.', is_read:0, created_at:'2026-03-07T08:05:00' },
    { notif_id:4, user_id:4, request_id:5, message:'Your request REQ-2026-0005 (Certificate of Enrollment) is ready for pickup!',              is_read:0, created_at:'2026-03-06T11:05:00' },
  ],
};

// ── Session (localStorage simulation) ─────────────────────────
const SESSION = {
  get()    { try { return JSON.parse(localStorage.getItem('ucc_session') || 'null'); } catch { return null; } },
  set(u)   { localStorage.setItem('ucc_session', JSON.stringify(u)); },
  clear()  { localStorage.removeItem('ucc_session'); },
  isLoggedIn() { return !!this.get(); },
  role()   { return this.get()?.role || null; },
};

// ── Lookup helpers ─────────────────────────────────────────────
const DB = {
  user(id)    { return MOCK.users.find(u => u.user_id === id) || null; },
  docType(id) { return MOCK.doc_types.find(d => d.doc_type_id === id) || null; },
  request(id) { return MOCK.requests.find(r => r.request_id === id) || null; },
  requestsByStudent(uid) { return MOCK.requests.filter(r => r.student_id === uid); },
  logsForRequest(rid) { return MOCK.status_logs.filter(l => l.request_id === rid); },
  notifsByUser(uid) { return MOCK.notifications.filter(n => n.user_id === uid); },
  unreadCount(uid) { return MOCK.notifications.filter(n => n.user_id === uid && !n.is_read).length; },
};

// ── Format helpers ─────────────────────────────────────────────
function fmtDate(str) {
  if (!str) return '—';
  return new Date(str).toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' });
}
function fmtDateTime(str) {
  if (!str) return '—';
  return new Date(str).toLocaleString('en-US', { year:'numeric', month:'short', day:'numeric', hour:'numeric', minute:'2-digit' });
}
function fmtMoney(n) { return '₱' + parseFloat(n).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','); }
function timeAgo(str) {
  const diff = Date.now() - new Date(str).getTime();
  const h = Math.floor(diff / 3600000);
  const d = Math.floor(h / 24);
  if (h < 1)  return 'Just now';
  if (h < 24) return `${h}h ago`;
  if (d < 7)  return `${d}d ago`;
  return fmtDate(str);
}

// ── Status pill HTML ───────────────────────────────────────────
function pillHtml(status) {
  return `<span class="pill pill-${status}">${capitalize(status)}</span>`;
}
function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

// ── Modal helpers ──────────────────────────────────────────────
function openModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-backdrop')) { e.target.classList.remove('open'); document.body.style.overflow = ''; }
  const btn = e.target.closest('[data-close]');
  if (btn) closeModal(btn.dataset.close);
});

// ── Table live search ──────────────────────────────────────────
function liveSearch(inputId, tableId) {
  const inp = document.getElementById(inputId);
  const tbl = document.getElementById(tableId);
  if (!inp || !tbl) return;
  inp.addEventListener('input', () => {
    const q = inp.value.toLowerCase();
    tbl.querySelectorAll('tbody tr').forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

// ── Password toggle ────────────────────────────────────────────
function togglePw(inputId, btn) {
  const el = document.getElementById(inputId);
  if (!el) return;
  el.type = el.type === 'password' ? 'text' : 'password';
  btn.textContent = el.type === 'password' ? '👁' : '🙈';
}

// ── Guard: redirect if not logged in ──────────────────────────
function requireLogin(expectedRole) {
  const user = SESSION.get();
  if (!user) { window.location.href = 'login.html'; return null; }
  if (expectedRole && user.role !== expectedRole) {
    const map = { student:'student-dashboard.html', staff:'staff-dashboard.html', admin:'admin-dashboard.html' };
    window.location.href = map[user.role] || 'login.html';
    return null;
  }
  return user;
}

// ── Render sidebar ─────────────────────────────────────────────
function renderSidebar(role, activePage) {
  const user  = SESSION.get();
  if (!user) return;
  const unread = DB.unreadCount(user.user_id);
  const badge  = unread ? `<span class="notif-badge-dot">${unread}</span>` : '';

  const navs = {
    student: [
      { label:'Main', links:[
        { icon:'📊', text:'Dashboard',      href:'student-dashboard.html' },
        { icon:'📄', text:'Submit Request', href:'submit-request.html' },
      ]},
      { label:'Tracking', links:[
        { icon:'📋', text:'My Requests',    href:'my-requests.html' },
        { icon:'🕑', text:'Request History',href:'request-history.html' },
      ]},
      { label:'Account', links:[
        { icon:'🔔', text:'Notifications',  href:'notifications.html', badge:true },
        { icon:'👤', text:'Profile',        href:'profile.html' },
        { icon:'🚪', text:'Logout',         href:'#', onclick:'logout()' },
      ]},
    ],
    staff: [
      { label:'Main', links:[
        { icon:'📊', text:'Dashboard',       href:'staff-dashboard.html' },
        { icon:'⏳', text:'Pending Requests',href:'pending-requests.html' },
        { icon:'📋', text:'All Requests',    href:'staff-all-requests.html' },
      ]},
      { label:'Account', links:[
        { icon:'🔔', text:'Notifications',   href:'notifications.html', badge:true },
        { icon:'👤', text:'Profile',         href:'profile.html' },
        { icon:'🚪', text:'Logout',          href:'#', onclick:'logout()' },
      ]},
    ],
    admin: [
      { label:'Main', links:[
        { icon:'📊', text:'Dashboard',       href:'admin-dashboard.html' },
        { icon:'📋', text:'All Requests',    href:'admin-requests.html' },
      ]},
      { label:'Management', links:[
        { icon:'👥', text:'Manage Users',    href:'admin-users.html' },
        { icon:'📄', text:'Document Types',  href:'admin-documents.html' },
      ]},
      { label:'Analytics', links:[
        { icon:'📈', text:'Reports',         href:'admin-reports.html' },
      ]},
      { label:'Account', links:[
        { icon:'🔔', text:'Notifications',   href:'notifications.html', badge:true },
        { icon:'👤', text:'Profile',         href:'profile.html' },
        { icon:'🚪', text:'Logout',          href:'#', onclick:'logout()' },
      ]},
    ],
  };

  const subLabel = { student:'Student Services', staff:'Staff Panel', admin:'Administration' };
  const avatarIcon = { student:'🎓', staff:'👩‍💼', admin:'🛡' };

  let html = `
    <div class="sidebar-logo">
      <div class="sidebar-logo-icon">🎓</div>
      <div>
        <div class="sidebar-brand">UCC Portal</div>
        <div class="sidebar-brand-sub">${subLabel[role]}</div>
      </div>
    </div>
    <div class="sidebar-user">
      <div class="sidebar-avatar ${role}">${avatarIcon[role]}</div>
      <div>
        <div class="sidebar-user-name">${user.full_name}</div>
        <span class="sidebar-badge ${role}">${capitalize(role)}</span>
      </div>
    </div>
    <nav class="sidebar-nav">`;

  const sections = navs[role] || [];
  sections.forEach((sec, si) => {
    html += `<div class="nav-section">`;
    if (si > 0) html += `<div class="nav-divider"></div>`;
    html += `<div class="nav-label">${sec.label}</div>`;
    sec.links.forEach(lnk => {
      const active = (activePage && lnk.href === activePage) ? 'active' : '';
      const onclick = lnk.onclick ? `onclick="${lnk.onclick}" href="#"` : `href="${lnk.href}"`;
      const notifBadge = lnk.badge && unread ? badge : '';
      html += `<a ${onclick} class="nav-link ${active}"><span class="nav-icon">${lnk.icon}</span>${lnk.text}${notifBadge}</a>`;
    });
    html += `</div>`;
  });

  html += `</nav><div class="sidebar-footer">© 2026 Univ. of City College</div>`;

  const el = document.getElementById('sidebar');
  if (el) el.innerHTML = html;
}

// ── Topbar ──────────────────────────────────────────────────────
function renderTopbar(title) {
  const user = SESSION.get();
  const el   = document.getElementById('topbar');
  if (!el || !user) return;
  el.innerHTML = `
    <span class="topbar-title">${title}</span>
    <span class="topbar-user">Welcome, <strong>${user.full_name.split(' ')[0]}</strong></span>`;
}

// ── Flash message ──────────────────────────────────────────────
function showFlash(msg, type='success') {
  const el = document.getElementById('flash');
  if (!el) return;
  el.className = `flash flash-${type}`;
  el.textContent = msg;
  el.classList.remove('hidden');
  setTimeout(() => { el.style.opacity='0'; setTimeout(() => { el.classList.add('hidden'); el.style.opacity=''; }, 400); }, 3500);
}

// ── Logout ──────────────────────────────────────────────────────
function logout() {
  SESSION.clear();
  window.location.href = 'login.html';
}

// ── Auto-dismiss flash on DOMContentLoaded ─────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.flash:not(.hidden)').forEach(el => {
    setTimeout(() => { el.style.transition='opacity 0.4s'; el.style.opacity='0'; setTimeout(() => el.remove(), 400); }, 3500);
  });
});
