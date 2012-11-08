				<div id="sidebar1" class="sidebar fourcol last clearfix" role="complementary">
				    
				    <p id="logo" class="h1"><a href="<?php echo home_url(); ?>" rel="nofollow"><?php bloginfo('name'); ?></a></p>
                    
                    <img id="corgi" src="/img/blog/corgi.png" title="drawing by a Nickelodeon artist on reddit http://www.reddit.com/r/IAmA/comments/xtu5a/iama_nickelodeon_storyboard_artist_im_back_ama/" />
                    
					<?php if ( is_active_sidebar( 'sidebar1' ) ) : ?>

						<?php dynamic_sidebar( 'sidebar1' ); ?>

					<?php else : ?>

						<!-- This content shows up if there are no widgets defined in the backend. -->
						
						<div class="alert help">
							<p><?php _e("Please activate some Widgets.", "bonestheme");  ?></p>
						</div>

					<?php endif; ?>

				</div>