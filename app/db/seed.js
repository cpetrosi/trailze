const db = require('../db');

const seedFeatures = () => db.Promise.map([
    {name: 'Viewpoint', description: 'Somewhere worth spending an extra few minutes.'},
    {name: 'Trailhead', description: 'Where the hiking trail begins.'},
    {name: 'Fallen Tree', description: 'Trail is blocked by a fallen tree.'},
    {name: 'Waterfall', description: 'Waterfall at this location.'},
    {name: 'Bear', description: 'Bear sighting at this location.'}
], feature => db.model('feature').create(feature));

const seedHikes = () => db.Promise.map([
  {
     name: 'Runyon Canyon',
     average_rating: 0,
     num_of_raters: 0,
     lat: 34.113738,
     long: -118.350094,
     description: 'An exerciser’s paradise in the Hollywood Hills, Runyon’s the ' +
                   'spot for views of the toned bodies and even tonier homes endemic to this ' +
                   'part of L.A. The packed dirt path leads hikers, runners, yoga enthusiasts ' +
                   'and roving weightlifters on a loop around the canyon, guaranteeing ' +
                   'countless moments to pause and utter “This is so L.A.”—particularly ' +
                   'during the after-work rush hour, when people-watching reaches its ' +
                   'frenzied peak.',
     image_url: 'https://scng-dash.digitalfirstmedia.com/wp-content/uploads/2018/01/2018_0130_runyon_canyon_02.jpg'
   },

   {
      name: 'Baldwin Hills Scenic Overlook',
      average_rating: 0,
      num_of_raters: 0,
      lat: 34.017903,
      long: -118.384081,
      description: 'An oil-rig studded hill on the edge of Culver City’s industrial' +
                    'zone is an odd place for a state park. But that’s all part ' +
                    'of this urban overlook’s understated charm. A destination ' +
                    'for exercisers south of the 10 freeway, the park’s main draw' +
                    'is the steps: more than 260 stone slabs that deliver ' +
                    'hikers—breathless, aching—to the top in under 20 minutes.',
      image_url: 'https://media.timeout.com/images/100519645/1024/768/image.jpg'
    },

    {
       name: 'Echo Mountain',
       average_rating: 0,
       num_of_raters: 0,
       lat: 34.213089,
       long: -118.120071,
       description: '“A quiet refuge from people and wild life forever,” declares ' +
                      'a sign at the entrance to the Sam Merrill Trail. While ' +
                      ' you’ll only linger here for a few hours, forever wouldn’t ' +
                      'be too long. This hike feels more like a weekend destination ' +
                      'than an after-work jaunt, unless you live in the ' +
                      'neighborhood. And based on the hydration packs and hiking ' +
                      'poles you’ll see, it’s a bit more serious hiking, than ' +
                      'say, at Griffith, but that doesn’t mean it’s too challenging for a novice.',
       image_url: 'https://media.timeout.com/images/100521773/1024/768/image.jpg'
     },

     {
        name: 'Eaton Canyon',
        average_rating: 0,
        num_of_raters: 0,
        lat: 34.16224,
        long: -118.085,
        description: 'Eaton Canyon is one of those must-see hiking areas of L.A., ' +
                      'both because the waterfall is actually impressive by San Gabriel' +
                      'standards, and that it’s so darn close to the city that you really' +
                      'don’t have any excuses not to go. The trail is easy to follow, and as' +
                      'long as you can hop across some boulders in a river (or have some hiking' +
                      'sandals to wade through), you’ll be just fine getting through the hike.',
        image_url: 'https://static.wixstatic.com/media/160e0c_abca96ed5a974a28bd88fc8632225f32~mv2.jpg'
      },

      {
         name: 'Hermit Falls',
         average_rating: 0,
         num_of_raters: 0,
         lat: 37.1621588,
         long: -118.7181663,
         description: 'Hermit Falls is one of the most popular hiking destinations in Southern California –' +
                      'a beautiful trail takes the hiker through the lower reaches of Santa Anita Canyon to' +
                      'the top of 30-foot tall Hermit Falls, where you can reliably find cliff-jumpers, and swimmers' +
                      'on warm weekends throughout the year.',
         image_url: 'https://hikingangelesforest.files.wordpress.com/2017/04/spruce-1701-029rawp.jpg'
       },

       {
          name: 'La Tuna Canyon',
          average_rating: 0,
          num_of_raters: 0,
          lat: 34.2322259,
          long: -118.3617464,
          description: 'If you’re looking for a trail with a bit of that “off the beaten path” feel but still' +
                        'wouldn’t mind keeping an eye on civilization from its vista points, the La Tuna Canyon' +
                        'Trail is a good bet. This meandering 4.3 mile trail provides some decent elevation gain in' +
                        'sections and a surprising variety of scenery — from deep, shaded riparian canyons to thick sage' +
                        'scrub and exposed ridgelines. You’ll have great views of the nearby cities and mountains on clear days,' +
                        'lots of fragrant sages to keep you company along the way, and you’ll also pass the remnants of a few rusted' +
                        'out old cars deep in the canyons!',
          image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/f0gbUft_jiSAPaFCV1fb_Q/o.jpg'
        },

        {
           name: 'Venice Canals Trail',
           average_rating: 0,
           num_of_raters: 0,
           lat: 33.9874758,
           long: -118.4697474,
           description: 'The Venice Canals are a pastoral residential retreat. Six interwoven water canals flow ' +
                        'through this charming neighborhood with walking paths beside the canals. Based on the canals' +
                        ' of Venice, Italy, Abbott Kinney’s "Venice of America" was completed in 1905. Landscaped ' +
                        'walkways and diverse architecture make this walk an enchanting visual experience. Fourteen bridges ' +
                        'and well-maintained walkways allow flexibility to walk around all six canals for any distance,' +
                        ' direction, or length of time. Canoes, paddle boats, and ducks frequent the waterways.',
           image_url: 'https://i.ytimg.com/vi/l_o1V-LNw9o/maxresdefault.jpg'
         },

         {
            name: 'Kenneth Hahn Recreation Area',
            average_rating: 0,
            num_of_raters: 0,
            lat: 34.0078314,
            long: -118.3663518,
            description: 'Kenneth Hahn State Recreation Area, or Hahn Park, is a state park unit of California in' +
                          ' the Baldwin Hills Mountains of Los Angeles. The park is managed by the Los Angeles County Department of' +
                          ' Parks and Recreation.[1] As one of the largest urban parks and regional open spaces in the Greater Los ' +
                          'Angeles Area, many have called it "L.A.’s Central Park". The 401-acre park was established in 1984.',
            image_url: 'https://www.californiabeaches.com/wp-content/uploads/2016/05/Screen-Shot-2013-06-24-at-1.34.48-PM-e1464387757184.png'
          }
], hike => db.model('hike').create(hike));

db.didSync
    .then(() => db.sync({force: true}))
    .then(seedFeatures)
    .then(features => console.log(`Seeded ${features.length} features OK`))
    .then(seedHikes)
    .then(hikes => console.log(`Seeded ${hikes.length} hikes OK`))
    .catch(error => console.error(error))
    .finally(() => db.close());
