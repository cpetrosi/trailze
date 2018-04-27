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
