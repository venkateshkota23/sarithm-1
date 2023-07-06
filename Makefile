build:
	mkdocs build

clean:
	rm -rf site/*

sync:
	aws s3 cp s3://sarithm.com/ site/ --recursive --profile=sari

test: 
	aws s3 cp site/. s3://sarithm.com/ --recursive --profile=sari
publish: 
	aws s3 cp site/. s3://sarithm-cloudfront.com/ --recursive --profile=sari
