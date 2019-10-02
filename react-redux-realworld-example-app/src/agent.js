import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3000/api';

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};

const Tags = {
  getAll: () => requests.get('/tags')
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = song => Object.assign({}, song, { slug: undefined })

const Songs = {
  all: page =>
      requests.get(`/songs?${limit(10, page)}`),
  byAuthor: (author, page) =>
      requests.get(`/songs?author=${encode(author)}&${limit(5, page)}`),
  byTag: (tag, page) =>
      requests.get(`/songs?tag=${encode(tag)}&${limit(10, page)}`),
  del: slug =>
      requests.del(`/songs/${slug}`),

  feed: () =>
      requests.get('/songs/feed?limit=10&offset=0'),
  get: slug =>
      requests.get(`/songs/${slug}`),
  update: song =>
      requests.put(`/songs/${song.slug}`, { song: omitSlug(song) }),
  create: song =>
      requests.post('/songs', { song })
};




const Profile = {
  follow: username =>
    requests.post(`/profiles/${username}/follow`),
  get: username =>
    requests.get(`/profiles/${username}`),
  unfollow: username =>
    requests.del(`/profiles/${username}/follow`)
};

export default {

  Songs,
  Auth,
  Profile,
  Tags,
  setToken: _token => { token = _token; }
};
