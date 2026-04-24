import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    // реализуйте тест-кейс
    const newPost = postsService.create(post);
    expect(newPost.id).toBe('2');
    expect(newPost.date).toBeDefined();
    expect(newPost.text).toBe(post.text);    
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
    // const firstPost = postsService.find('1');
    // expect(firstPost).toBeDefined();
    // expect(firstPost?.id).toBe('1');
    // expect(firstPost?.date).toBeDefined();
    // expect(firstPost?.text).toBe('Some pre-existing post');
      const newPost = postsService.create(post);

      const found = postsService.find(newPost.id);

      expect(found).toBeDefined();
      expect(found?.id).toBe(newPost.id);
      expect(found?.text).toBe(post.text);
      expect(found?.id).not.toBe('1');
  });
});