# gene-similarity
A data visualization of gene similarity across ethnicities using National Geographic data from Geno 2.0 Next Generation ([link](https://genographic.nationalgeographic.com/reference-populations-next-gen/)).

# Files & directory
The repository is made of two main files:
 * `scrapping.ipynb`: A file to extract the data from the locally saved
 file but also works for extracting from the URL.
 * `webpage` directory: It contains a local version of the National Geographic webpage.
 * `data.json`: contains extracted data from the webpage.
 * `index.html`: The main webpage to show D3 dashboard.

# To-do list
1. Create a dashboard using D3 which enables user to:
2. Select a country and see genetic contributions as a bar chart,
3. Make a graph representation to find the most similar genetic combinations,such that ethnicities are clustered  based on their similarities.
