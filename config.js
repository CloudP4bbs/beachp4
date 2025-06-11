// Arquivo: config.js

// Cole aqui a configuração do seu projeto Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDEiEknWaOl2ra-it2dB8mFGPb9-Q__5-E",
  authDomain: "beachp4-70588.firebaseapp.com",
  projectId: "beachp4-70588",
  storageBucket: "beachp4-70588.appspot.com",
  messagingSenderId: "960018980292",
  appId: "1:960018980292:web:a11dbdd40811dec1ee5891"
};

// --- FUNÇÕES UTILITÁRIAS GLOBAIS ---

/**
 * Exibe uma notificação flutuante (toast) na tela.
 * @param {string} message A mensagem a ser exibida.
 * @param {string} [type='success'] O tipo de toast ('success' ou 'error').
 */
export function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container') || createToastContainer();
    const toast = document.createElement('div');
    toast.className = `fixed bottom-5 right-5 p-4 rounded-lg shadow-xl text-white ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} transition-all duration-300 transform translate-y-20 opacity-0`;
    toast.textContent = message;
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove('translate-y-20', 'opacity-0');
    }, 10);

    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-0 right-0 p-4 z-50';
    document.body.appendChild(container);
    return container;
}


/**
 * Verifica se o usuário está autenticado. Redireciona para a página de login caso não esteja.
 * @param {object} auth A instância de autenticação do Firebase.
 */
export function protectPage(auth) {
    return new Promise((resolve) => {
        auth.onAuthStateChanged(user => {
            if (!user) {
                window.location.href = 'admin.html';
            } else {
                resolve(user);
            }
        });
    });
}